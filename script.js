fetch('https://api.themoviedb.org/3/list/1?api_key=dadc3cca34a13bce2a1089c8f69dacec&language=en-US')
.then(response => {
    if (!response.ok) {
        throw new Error('Unexpected Network response');
    }
    return response.json();
})
.then((data) => {
    let count = 0;
    let res=``
    console.log(data.items)
    while (count < data.items.length) {
        res+=`<div class="col-md-3 mt-4">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${data.items[count].poster_path}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data.items[count].original_title}</h5>
              <p><i class="fas fa-star" style="color:green"></i>
              <i class="fas fa-star" style="color:green"></i>
              <i class="fas fa-star" style="color:green"></i>
              <i class="fas fa-star" style="color:green"></i>
              <i class="fas fa-star" style="color:green"></i>
               5/5
              </p>
              <p class="card-text">Language: ${data.items[count].original_language}</p>
              <p class="card-text">Release Date: ${data.items[count].release_date}</p>
              <a href="movie.html?id=${data.items[count].id}" class="btn btn-primary">View Details</a>
            </div>
          </div>
    </div>`
    count+=1;
    }
    $('#movielist').html(res);

});
