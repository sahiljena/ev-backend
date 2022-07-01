const express = require("express");
const Rating = require("../models/unitRating");
const User = require("../models/user");
const router = express.Router();
const nodemailer = require("nodemailer");
const auth = require("../middlewares/auth");


const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "find.roomy.otp@gmail.com",
        pass: "tvffezplxkojfxux"
    },
    tls: {
        rejectUnauthorized: false
    }
});
const sendBillNotification = (mail,id,dueDate,startDate, endDate) =>{
    link = "yettoupadte";
    //console.log(link);
    const mailOptions = {
        from: "find.roomy.otp@gmail.com",
        to: mail,
        subject: "Bill Generated ",
        html: "Bill Number :"+id+"   Generated for Period : <b>"+startDate+"</b> to <b>"+endDate+"</b> <br><br> Due by : <b>"+dueDate+"</b> <br><br><br> Click here to <a href='"+link+"'>pay</a>",
    };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("mail sent");
        }
    });
}
router.post("/:userid/add", async (req, res) => {
  //console.log(req.body);
  const user = await User.findOne({ _id : req.params.userid });
  
  if(user){
    const data = await Rating.findOne({ customerID: req.params.userid, startDate: {$lte:new Date()}, endDate:{$gte:new Date()} });
    //console.log(data);
    if(data){
          Rating.findOneAndUpdate(
            { customerID: req.params.userid, _id: data._id },
              { 
                $inc: { 
                  units:  parseFloat(req.body.unit)
                },
                lastUpdated:new Date(),
              },
            { new: true },
            function (err, response) {
              if(response){
                console.log(response);
                res.status(200).json(
                  {
                    code: "UNIT_UPDATED",
                    message: "Units updated successfully"
                  }
                )
              }
            }
          );
    }
    else{
      const rating = new Rating({
        customerID: req.params.userid,
        units: 0,
        pay_status: -1,
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        dueBy: new Date(new Date().setDate(new Date().getDate() + 40)),
      });
      rating.save().then(() => {
        res.status(201).send({
          code: "INSTANCE_ADDED",
          message: "Unit Rate Instance Added",
        });
      });
    }
  }
  else{
    res.status(404).json({
      code: "USER_NOTFOUND",
      message: "Requested user is not found!!!"
    })
  }
});

router.post("/:userid/updateStatus/", async(req, res) => {
  const unBilleds = await Rating.find({ customerID: req.params.userid, pay_status:-1,startDate:{ $gte: new Date() } });
  console.log(unBilleds);
  for(var i=0;i<unBilleds.length;i++){
    console.log(unBilleds[i]._id);
    Rating.findOneAndUpdate(
      { 
        customerID: req.params.userid, 
        _id: unBilleds[i]._id,
      },
      { 
        pay_status: 0,
        lastUpdated:new Date(),
      },
      { new: true },
        async function (err, response) {
          if(response){
            const user =  await User.findOne({ _id: req.params.userid});
            console.log(user);
            sendBillNotification(user.email, response._id, response.dueBy, response.startDate, response.endDate);
          }
        }
    );
  }

  res.status(201).json({
    code: "BILLS_UPDATED_AND_NOTIFED",
    message: "Bills updated Successfully"
  })
});

router.get("/:userid/unpaid", auth, async(req, res) => {
  const unPaidBills = await Rating.find({ customerID: req.params.userid, pay_status:0 });
  res.status(200).json({
    unPaidBills: unPaidBills
  })
})
router.get("/:userid/inproccess", auth, async(req, res) => {
  const inpBills = await Rating.find({ customerID: req.params.userid, pay_status:1 });
  res.status(200).json({
    inpBills: inpBills
  })
})
router.get("/:userid/paid", auth, async(req, res) => {
  const paidBills = await Rating.find({ customerID: req.params.userid, pay_status:2 });
  res.status(200).json({
    paidBills: paidBills
  })
})

module.exports = router;
