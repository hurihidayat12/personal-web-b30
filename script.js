let blogs = [];

function addBlog(event){

    event.preventDefault();

    //atau menggunakan 
    //a.preventDefault();

    //atau ini juga bisa
    //e.preventDefault();

    //console.log("selamat datang");
    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files

    image = URL.createObjectURL(image[0]);

    // console.log(image);
    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'huri',
        postAt: new Date()
    }

    blogs.push(blog);

    console.log(blog);

    console.log(blogs);

//     for(let i = 0; i < blogs.length; i++){
//         console.log(blogs[i]);
// }

  renderBlog()
}
 
//html manipulation / DOM


function renderBlog() {
    let konten = document.getElementById("contents");

    konten.innerHTML = ""

    for (let i = 0; i < blogs.length; i++) {

    konten.innerHTML +=  `
      <div class="blog-list-item">
        <div class="blog-image">
            <img src="${blogs[i].image}" alt=""/>
          </div>
          <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"> 
              ${blogs[i].title}</a>
          </h1>
          <div class="detail-blog-content">
              ${blogs[i].postAt} | ${blogs[i].author}
          </div>
            <p>
              ${blogs[i].content}
            </p>
          <div class ="update-time">
            <span>
              ${getDistanceTime(blogs[i].postAt)}
            </span>
            </div>
      </div>`
    }
}


// let time = new Date()

// console.log(time);
// console.log(time.getDate());
// console.log(time.getMonth());
// console.log(time.getFullYear());


// console.log(time.getHours());
// console.log(time.getMinutes());

let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
"Juli", "Agustus", "September", "Oktobebr", "November", "Desember"];

function getfullTime(time) {

  let date = time.getDate();

  let monthIndex = time.getMonth();
  
  let year = time.getFullYear();
 
  let hours = time.getHours();

  let minutes = time.getMinutes();

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

  console.log(fullTime)
  return getfullTime;
}

function getDistanceTime(time) {

  let timePost = time;
  let timeNow = new Date();
  
  let distance = timeNow - timePost;

  let miliSecond =  1000; // = 1 detik
  let secondinHours = 3600; //1jam = 3600 mili second
  let hoursinDay = 23; //23 jam dalam 1 hari
  let minutes = 60;
  let seconds = 60;

  let distanceDay = Math.floor(distance / (miliSecond * secondinHours * hoursinDay)); //untuk mendapakatkan hari
  let distanceHours  = Math.floor(distance / (miliSecond * seconds  * minutes )); //untuk mendapatkan jam
  let distanceMinutes = Math.floor(distance / (miliSecond * seconds))
  let distanceSecond = Math.floor(distance / miliSecond)
  
  //distanceDay = Math.floor(distanceDay);
  //console.log(distanceDay+' day ago');

  if (distanceDay >= 1) {
    return `${distanceDay} day ago`
  } 
    else if (distanceHours >= 1) {
      return `${distanceHours}  hours ago`
  } 
    else if (distanceMinutes >= 1){  
      return`${distanceMinutes} Minutes Ago`
  } 
    else {
      return`${distanceSecond} Second Ago`
    }
  }

setInterval(() => {
  renderBlog();
 },3600);






