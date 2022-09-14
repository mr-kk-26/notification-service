const Notification = require("../models/notification.model")

/**

------------ Controller to create the notification

------ validation of the notification req body, should be written : middleware
*/

exports.acceptNotificationRequest = (req, res)

try{


  // create notificationObj
  const notificationObj = {
    subject: req.body.subject,
    recepientEmails: req.body.recepientEmails,
    content: req.body.content,
    requester: req.body.requester,
    status: req.body.status
  };


  // Save the notification request
  const notification = await Notification.create(notificationObj);






  // send the tracking id back to the caller
  // _id of the created notification object can be used

  res.status(201).send({
    message: "Request accepted",
    trackingId: notification._id
  })
} catch(err){
    console.log("Error while storing the Notification request : ", err.message);
    res.status(500).send({
      message: "INTERNAL SERVER ERROR"
    })
}
/**

------------- Controller to fetch the notification based on the notification Id
*/

exports.getNotificationDetails = (req, res)=>{
  try{
  const trackingId = req.params.id;

  Notification.findOne({_id: trackingId});

  const notification = await Notification.findOne({_id: trackingId});

  res.status(200).send(notification);
} catch(err){
  console.log("Error while retrieving the notification : ", err.message );
  res.status(500).send({
    message: "Internal server error"
  })
}
}
