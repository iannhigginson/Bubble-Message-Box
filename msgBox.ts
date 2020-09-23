/**
 * An uptodate version of inhMsgBox
 * 23/09/2020 11:00
 * Ian Neal Higginson.
 */

function showMsgBox(hed: string, msg: string) {

 const msgBox = document.createElement("div");
 msgBox.id = "msgBox";

 const removemsgBox = () => {
  const existingmsgBox = document.getElementById(msgBox.id);
  if (existingmsgBox && existingmsgBox.parentElement) {
   existingmsgBox.parentElement.removeChild(existingmsgBox);
  }
 };

 removemsgBox();

 msgBox.style.backgroundColor = "#575757";
 msgBox.style.color = "white";
 msgBox.style.border = "1px solid black";
 msgBox.style.borderRadius = "5px";
 msgBox.style.padding = "10px";
 msgBox.style.marginBottom = "auto";
 msgBox.style.marginLeft = "auto";
 msgBox.style.marginRight = "auto";
 msgBox.style.marginTop = "auto";

 const closeButton = document.createElement("a");
 msgBox.appendChild(closeButton);
 closeButton.textContent = "X";
 closeButton.style.backgroundColor = "#000000";
 closeButton.style.border = "#ffffff solid thin";
 closeButton.style.borderRadius = "5px";
 closeButton.style.color = "#ffffff";
 closeButton.style.cursor = "pointer";
 closeButton.style.float = "right";
 closeButton.style.fontWeight = "bold";
 closeButton.style.padding = "3px";
 closeButton.style.position = "reletive";
 closeButton.style.top = "3px";


 closeButton.onclick = () => {
  removemsgBox();
 };

 // const postCloseButton = document.createElement('br');
 // msgBox.appendChild(postCloseButton);

 const msgBoxHeader = document.createElement("header");
 msgBox.appendChild(msgBoxHeader);
 msgBoxHeader.innerHTML = hed;
 msgBoxHeader.style.marginLeft = "auto";
 msgBoxHeader.style.marginRight = "auto";
 msgBoxHeader.style.textAlign = "center";

 const message = document.createElement("section");
 msgBox.appendChild(message);
 message.innerHTML = '<hr /><br />' + msg;

 document.body.appendChild(msgBox);

}