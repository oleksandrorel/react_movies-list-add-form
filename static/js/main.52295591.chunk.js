(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(8),r=a.n(l),m=(a(16),a(10)),c=a(2),s=a(3),o=a(5),d=a(4),h=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var u=a(6),g=(a(20),a(1)),v=a.n(g),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleValid:!0,descriptionValid:!0,imgUrlValid:!0,imdbUrlValid:!0,imdbIdValid:!0},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(u.a)({},i,n))},e.onAdd=function(){var t=e.state,a={title:t.title,description:t.description,imgUrl:t.imgUrl,imdbUrl:t.imdbUrl,imdbId:t.imdbId};e.props.addMovie(a),e.clear()},e.toValidate=function(t){var a=t.target,i=a.name,n=a.value;switch(i){case"title":case"description":case"imdbId":e.setState(Object(u.a)({},"".concat(i,"Valid"),!!n));break;case"imgUrl":case"imdbUrl":e.setState(Object(u.a)({},"".concat(i,"Valid"),!!n.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)))}},e.clear=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.description,l=t.imgUrl,r=t.imdbUrl,m=t.imdbId,c=t.titleValid,s=t.descriptionValid,o=t.imgUrlValid,d=t.imdbUrlValid,h=t.imdbIdValid,p=!a||!i||!l||!r||!m;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"header"},"Add new movie"),n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAdd()}},n.a.createElement("div",{className:"inputBlock"},n.a.createElement("p",null,"Title: "),n.a.createElement("input",{type:"text",name:"title",placeholder:"Add a title",className:v()({warning:!c}),value:a,onChange:this.handleChange,onBlur:this.toValidate}),!c&&n.a.createElement("p",{className:"error"},"The title is not valid")),n.a.createElement("div",{className:"inputBlock"},n.a.createElement("p",null,"Description: "),n.a.createElement("input",{type:"text",name:"description",placeholder:"Add a description",className:v()({warning:!s}),value:i,onChange:this.handleChange,onBlur:this.toValidate}),!s&&n.a.createElement("p",{className:"error"},"The description is not valid")),n.a.createElement("div",{className:"inputBlock"},n.a.createElement("p",null,"Image url: "),n.a.createElement("input",{type:"text",name:"imgUrl",placeholder:"Add image url",className:v()({warning:!o}),value:l,onChange:this.handleChange,onBlur:this.toValidate}),!o&&n.a.createElement("p",{className:"error"},"The link is not valid")),n.a.createElement("div",{className:"inputBlock"},n.a.createElement("p",null,"IMDb url: "),n.a.createElement("input",{type:"text",name:"imdbUrl",placeholder:"Add IMDb url",className:v()({warning:!d}),value:r,onChange:this.handleChange,onBlur:this.toValidate}),!d&&n.a.createElement("p",{className:"error"},"The link is not valid")),n.a.createElement("div",{className:"inputBlock"},n.a.createElement("p",null,"IMDb id: "),n.a.createElement("input",{type:"text",name:"imdbId",placeholder:"Add IMDb id",className:v()({warning:!h}),value:m,onChange:this.handleChange,onBlur:this.toValidate}),!h&&n.a.createElement("p",{className:"error"},"The id is not valid")),n.a.createElement("button",{type:"submit",className:"addMovieBtn",disabled:p},"Add new movie")))}}]),a}(i.Component),w=a(9),E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:w},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{addMovie:this.addMovie})))}}]),a}(i.Component);r.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.52295591.chunk.js.map