/**
 * @package MessageBox.js
 * @version 1.1.100122.1343
 * @date 10/01/2022 13:43
 * @author Ian Neal Higginson.
 */

 function msgBox(hed, msg) {
  /**
   *# The message box
   */
  const MessageBox = document.createElement("div");
  MessageBox.id = "MessageBox";
  MessageBox.style.backgroundColor = "#575757";
  MessageBox.style.color = "white";
  MessageBox.style.border = "1px solid black";
  MessageBox.style.borderRadius = "5px";
  MessageBox.style.boxShadow = "2px 2px 2px 1px #272727";
  MessageBox.style.padding = "10px";
  MessageBox.style.marginBottom = "auto";
  MessageBox.style.marginLeft = "auto";
  MessageBox.style.marginRight = "auto";
  MessageBox.style.marginTop = "auto";
  MessageBox.style.position = "fixed";
  MessageBox.style.top = "10px";
  MessageBox.style.left = "5%";
  MessageBox.style.width = "90%";
  MessageBox.style.height = "90%";

  /**
   *# Remove message box method
   */
  const removeMessageBox = () => {
   const existingMessageBox = document.getElementById(MessageBox.id);
   if (existingMessageBox && existingMessageBox.parentElement) {
    existingMessageBox.parentElement.removeChild(existingMessageBox);
   }
  };
  removeMessageBox();

  /**
   *# Remove message box button
   */
  const closeButton = document.createElement("span");
  closeButton.id = "MessageBoxCloseButton";
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
   removeMessageBox();
  };

  /**
   *# Message box header
   */
  const MessageBoxHeader = document.createElement("header");
  MessageBoxHeader.id = "MessageBoxHeader";
  MessageBoxHeader.innerHTML = hed;
  MessageBoxHeader.style.marginLeft = "auto";
  MessageBoxHeader.style.marginRight = "auto";
  MessageBoxHeader.style.textAlign = "center";

  /**
   *# The message container
   */
  const message = document.createElement("section");
  message.id = "MessageBoxContentContainer";
  message.innerHTML = `<hr /><br />${msg}`;

  /**
   *# Put it all togeather
   *! In this order please!
   */
  MessageBox.appendChild(closeButton);
  MessageBox.appendChild(MessageBoxHeader);
  MessageBox.appendChild(message);

  /**
   *# Stick it to the document
   */
  document.body.appendChild(MessageBox);

  /**
   *# Focus on the message box
   */
  MessageBox.focus();
 }
