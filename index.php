<html>
  <style>
    div#container {
	width: 100vw;
	height: 55vh;
	display: flex;
	justify-content: center;
	padding: 1em 0px;
    }
    div#post {
	width: 55vw;
	height: 100%;
    }    
    div#buttons {
	display: flex;
	align-items: center;
	justify-content: center;
    }    
    button {
	margin: 0 5px;
    }    
    div#content {
	border: solid black 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 90%;
	margin: 1em 0;
    }
    div#comments-container {
	width: 100vw;
	display: flex;
	justify-content: center;
    }
    div#comments-section {
	width: 45%;
    }
    div#comments {
	padding: 0 1em;
	border: 1px black solid;
	width: 100%;
	height: auto;
    }
    comment-div.comment, div.comment {
	padding: 0.5em;
	border: 0.5px black solid;
	margin: 1em 0;
    }
    div.comment > div {
	margin: 3px 0;
    }
    div.comment-interaction {
	display: flex;
	justify-content: end;
    }
    div.new-comment {
	padding: 1em;
	display: flex;
	justify-content: space-around;
	align-items: center;
    }
    input {
	height: 30px;
	width: 100%;
    }
    div.comment-content {
	width: 100%;
    }
  </style>
  <body>
    <div id="container">
      <div id="post">
	<div id="content">
	  NEW POST
	</div>
	<div id="buttons">
	  <button>Like</button>
	  <button onclick="return loadComments()" id="comment">Comment</button>
	  <button>Share</button>
	</div>
      </div>
    </div>
    <script src="./assets/js/main.js"></script>
  </body>  
</html>
