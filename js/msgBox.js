/**
 * @package msgBox.js
 * @version 1.1.100122.0900
 * @date 10/01/2022 09:00
 * @author Ian Neal Higginson.
 */

function showMsgBox(hed, msg) {
 /**
  *# The message box
  */
 var msgBox = document.createElement("div");
 msgBox.id = "msgBox";
 msgBox.style.backgroundColor = "#575757";
 msgBox.style.color = "white";
 msgBox.style.border = "1px solid black";
 msgBox.style.borderRadius = "5px";
 msgBox.style.boxShadow = "2px 2px 2px 1px #272727";
 msgBox.style.padding = "10px";
 msgBox.style.marginBottom = "auto";
 msgBox.style.marginLeft = "auto";
 msgBox.style.marginRight = "auto";
 msgBox.style.marginTop = "auto";
 msgBox.style.position = "fixed";
 msgBox.style.top = "10px";
 msgBox.style.left = "5%";
 msgBox.style.width = "90%";
 msgBox.style.height = "90%";

 /**
  *# Remove message box method
  */
 var removemsgBox = () => {
  var existingmsgBox = document.getElementById(msgBox.id);
  if (existingmsgBox && existingmsgBox.parentElement) {
   existingmsgBox.parentElement.removeChild(existingmsgBox);
  }
 };
 removemsgBox();

 /**
  *# Remove message box button
  */
 var closeButton = document.createElement("a");
 closeButton.textContent = "X";
 closeButton.style.backgroundColor = "#ff0000";
 closeButton.style.border = "#ffffff solid thin";
 closeButton.style.borderRadius = "5px";
 closeButton.style.color = "#ffffff";
 closeButton.style.cursor = "pointer";
 closeButton.style.float = "right";
 closeButton.style.fontWeight = "bold";
 closeButton.style.padding = "10px";
 closeButton.style.position = "relative";
 closeButton.style.top = "1px";
 closeButton.style.zIndex = "1000";
 closeButton.onclick = () => {
  removemsgBox();
 };

 /**
  *# Message box header
  */
 var msgBoxHeader = document.createElement("header");
 msgBoxHeader.innerHTML = hed;
 msgBoxHeader.style.marginLeft = "auto";
 msgBoxHeader.style.marginRight = "auto";
 msgBoxHeader.style.textAlign = "center";

 /**
  *# The message container
  */
 var message = document.createElement("section");
 message.innerHTML = "<hr /><br />" + msg;

 /**
  *# Put it all togeather
  *! In this order please!
  */
 msgBox.appendChild(closeButton);
 msgBox.appendChild(msgBoxHeader);
 msgBox.appendChild(message);

 /**
  *# Stick it to the document
  */
 document.body.appendChild(msgBox);

 /**
  *# Focus on the message box
  */
 msgBox.focus();
}
