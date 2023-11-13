document.addEventListener('DOMContentLoaded', function() {
    const nameOfPage = document.querySelector('#name-page').innerHTML;
    this.body.innerHTML = `<nav
    class="flex justify-center bg-da-czaruk-black p-5 sticky top-0 left-0 shadow-2xl h-[100px]"
  >
    <div
      class="flex w-[1200px] m-auto text-da-czaruk-white justify-between items-center"
    >
      <a href="index.html" class="text-4xl p-5 font-bold flex-none">
        <img src="/assets/Logo.png" class="w-[50px] h-[50px] inline" alt="" />
        Czaruko
      </a>
      <div class="text-xl text-right inline flex-none">
        <a href="blog.html" class="p-3"> Studies </a>
        <a href="finished.html" class="p-3"> Finished </a>
        <a href="contact.html" class="p-3"> Contact </a>
      </div>
    </div>
  </nav>` + this.body.innerHTML;
});

