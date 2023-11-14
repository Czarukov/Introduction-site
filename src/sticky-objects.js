document.addEventListener('DOMContentLoaded', function() {
  const textToAdd = 
    `<nav
    class="flex justify-center bg-da-czaruk-black p-5 sticky top-0 left-0 shadow-2xl h-[100px]">
    <div class="flex w-[1200px] m-auto text-da-czaruk-white justify-between items-center">
      <a href="/" class="text-4xl font-bold flex-none">
        <img src="../assets/Logo.png" class="w-[50px] h-[50px] inline" alt="" />
        Czaruko
      </a>
      <div class="text-xl text-right inline flex-none">
        <a href="/src/blog.html" id="l1" class="p-3 hover:font-semibold"> Studies </a>
        <a href="/src/finished.html" id="l2" class="p-3 hover:font-semibold"> Finished </a>
        <a href="/src/contact.html" id="l3" class="p-3 hover:font-semibold"> Contact </a>
      </div>
    </div>
  </nav>`;
  this.body.innerHTML = textToAdd + this.body.innerHTML;
  hoverCorrectPage();
});
function hoverCorrectPage(){
  const nameOfPage = document.getElementById('name-page').innerText;
  const listOfClasses = ["underline","underline-offset-8","decoration-da-czaruk-red","font-semibold"]
  let tabToUnderline;
  switch (nameOfPage){
    case "Studies":
      tabToUnderline = document.getElementById('l1');
      break;
    case "Finished":
      tabToUnderline = document.getElementById('l2');
      break;
    case "Contact":
      tabToUnderline = document.getElementById('l3');
      break;
    default:
  }
  for(let i = 0; i < listOfClasses.length; i++){
    tabToUnderline.classList.add(listOfClasses[i]);
  }
}


