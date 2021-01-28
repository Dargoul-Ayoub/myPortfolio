.theme-light{
   --color-primary: #ffff;
   --color-secondary: #ffff;
   --color-accent: #000000;
   --font-color: #000000;
}
.theme-dark{
	--color-primary: #1B2631;
   --color-secondary: #212F3C;
   --color-accent: #FF5733;
   --font-color: #ffffff;
}
body{
	background-color:var(--color-primary);
	color: var(--font-color);
	font-size: 12px;
    font-family: "Georgia","Lucida Handwriting";
    font-weight: bold;
    margin: 0px;
    }
 #card-top{
 	background-color: var(--color-primary);
 	display: flex;
 	flex-wrap: wrap;
 	justify-content: space-between;
 	align-items: center;
 	padding: 0px 15px;
 }
 header{
 	background-image: url("images\\headImg.jpeg");
 	background-repeat: no-repeat;
 	background-position: center;
 	padding: 10px;
 }
#img-profile{
	display: block;
	width: 200px;
	height: 200px;
	border-radius: 100%;
	padding: 5px;
	margin-left: auto;
	margin-right: auto;
	transform: translate(0,50px);
}
#about-me{
	background-color:var(--color-secondary);
	color: var(--font-color);
	border-radius: 10px;
	padding: 25px;
    box-shadow: 0px 0px 10px lightgray;
    margin-left: 250px;
    margin-right: 250px;
    font-size: 20px;
}

img{
	width: 100%;
	height: 170px;
	padding: 0;
	margin-right: auto;
	margin-left: auto;
	box-shadow: 0px 0px 10px lightgray;
}
img:hover{
     	transform: scale(2);
}
.cercle-img{
	width: 170px;
	border-radius: 15px;
}
.box-image{
	box-shadow: 0px 0px 0px;
}
.container img{
	box-shadow: 0px 0px 0px;
}
.container div{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 10px;
	height: 485px;
	margin: 10px;
	padding: 5px;
	text-align: center;
	background-color: var(--color-secondary)
}
.border-padding{
	border:2px solid gray;
	border-radius: 10px;
	padding: 20px;
}
button{
	background-color: var(--color-primary);
	color: #FF5733;
	border-radius: 5px;
	padding: 5px;
	margin: 2px;
	font-weight: bold;
	font-size: 10px;
	outline: none;
}
td{
		width: 300px;
		padding: 10px;
		vertical-align: top;
		border-bottom: 0.2px solid lightgray;
		border-top: 0.2px solid lightgray;
}
.box-item{
	width: 300px;
	padding: 10px;
	box-shadow: 0px 0px 5px lightgray;
}
table{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	padding: 5px;
	display: block;
}
.container{
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
a{
	display: block;
	padding: 5px;
	height: 20px;
	text-decoration: none;
	color: var(--font-color);
	margin-left: 50px;
	margin-right: 50px;
}
.container a:hover{
	background-color: #A6ACAF;
}
ol{
	list-style-type: none;
	columns: 3;
	text-align: center;
	list-style-position: inside;
	font-weight: bold;
}
h2,h3{
	text-align: center;
	color: #A6ACAF ;
	padding:10px 10px;
	
}
h3{
	border-bottom: 0.2px solid lightgray;
	border-top: 0.2px solid lightgray;
}
.background-color-red{
	background-color: red;
	color : var(--font-color);
}
ol li{
	margin: 10px;
}
footer p{
	margin: 0px;
}
footer div{
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	box-shadow: 0px 0px 0px;
	justify-content: space-between;
    height: auto;
    align-items: center;
    margin-right: 100px;
    margin-left: 100px;
}
#myAccounts{
    display: block;
	border-radius: 10px;
	margin: 10px;
	padding: 5px;
}
footer a{
	display: inline;
	margin: 0px;
	padding: 0px;
	border: 0px;

}
footer h3,.background-color-red{
	border: 0;
}
.fab, .fas, .far{
	font-size: 2em;
	margin: 0 10px;
}
#btn-mode{
	color: var(--color-accent);
}
 hr{
    border-bottom: 1px solid red;
    width: 200px;
}
strong{
	color: #FF5733;
	font-size: 20px;
}


@media only screen and (max-width: 600px){
	#about-me{
		margin: 0px;
		font-size: 15px;
	}
	#img-profile{
	transform: translate(0,20px);
}
footer div, #card-top{
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
}
}
