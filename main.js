
var db_arr_NoN=["sayedmh","ahmedmh","admin","1"]

function usrname_search(usr_name){
  if(db_arr_NoN.includes(usr_name)){
    get_usr_data("username_resp").textContent = "Not Available username"
    return 1;
  }
  else{
    get_usr_data("username_resp").textContent = ""
    return 0;
  }
}

function rndm_usr_name(first_name, last_name) {
  console.log("%cGenerating_user_name", "color:red;font-size:20px");
  usr_name =
    first_name.slice(0, first_name.length - 2).toLowerCase() +
    Math.floor(Math.random() * (99 - 2 + 1)) +
    "y" +
    "_" +
    last_name.slice(last_name.length - 2);
  return usr_name;
}

function get_usr_data(idname) {
  console.log("%cGetting_user_data", "color:yellow;font-size:15px");
  var res = document.getElementById(idname);
  return res;
}

function chng_el_txCnt(idname,new_val){
  console.log("%cChanging_user_data_tex", "color:cyan;font-size:15px");
  get_usr_data(idname).textContent=new_val;
}

function chng_el_val(idname,new_val){
  console.log("%cChanging_user_data_val", "color:cyan;font-size:15px");
  get_usr_data(idname).value=new_val
}

function chng_el_val_usr(rndm_usr){
  console.log("%cChanging_user_data_val_usr", "color:cyan;font-size:15px");
  get_usr_data("usrname").value=rndm_usr
  get_usr_data("username1").textContent=rndm_usr
}

function cpy_pass(){
  console.log("%cCopied_PASS_PART", "color:white; font-size:15px;");
  var textToCopy = get_usr_data("usrpass").value;
  var textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}


function rndm_usr_pass(first_name, last_name) {
  console.log("%cGenerating_user_pass", "color:orange;font-size:20px");
  const max_num = 47;
  const min_num = 33;
  const asc_cd_num =
    Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
  pass =
    first_name.slice(first_name.length - 4, -1) +
    Math.floor(Math.random() * (999 - 0 + 0)) +
    String.fromCharCode(asc_cd_num) +
    last_name[3].toUpperCase() +
    "y" +
    String.fromCharCode(last_name[2].charCodeAt(0) + 5);
    console.log(pass)
    chng_el_val("usrpass",pass)
  return pass;
}


var usr_data_arr = [];
function get_form_values() {
  let usr_data_el = get_usr_data("signup-form");
  usr_data_arr.length = 0;
  for (var i = 0; i < 3; i++) {
    if (
      usr_data_el.elements[i].value.length >= 5 &&
      usr_data_el.elements[i].value.length <= 15
    ) {
        if (usr_data_el.elements[i].type !== "button") {
          usr_data_arr.push(usr_data_el.elements[i].value);
        }
      } else {
        console.error("Data length error");
      }
  }
  if(usrname_search(usr_data_arr[2])){
    console.error("Not Available username")
    usr_data_arr.splice(2,1)
  }
  console.log(usr_data_arr);
  var finl_rndm_usr=rndm_usr_name(usr_data_arr[0],usr_data_arr[1])
  console.log(finl_rndm_usr)
  chng_el_txCnt("username1",finl_rndm_usr);
  chng_el_txCnt("usr_name_sugs_val_co","Suggested username: ")
  return finl_rndm_usr;
}