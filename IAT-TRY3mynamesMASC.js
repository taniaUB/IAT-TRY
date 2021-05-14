define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'SELF', //Will appear in the data.
		    title : {
		      media : {word : 'Yo mismo'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'Me1'}, 
    			{word : 'Me2'}, 
    			{word : 'Me3'}, 
    			{word : 'Me4'}, 
    			{word : 'Me5'}, 
    			{word : 'Me6'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'non-empowered', //Attribute label
			title : {
				media : {word : 'Non-empowered'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Pasivo'},
				{word: 'Simplon'},
				{word: 'Dependiente'},
				{word: 'Supeditado'},
				{word: 'Dócil'},
				{word: 'Sumiso'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Empowered', //Attribute label
			title : {
				media : {word : 'Empowered'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Trabajador'},
				{word: 'Independiente'},
				{word: 'Decidido'},
				{word: 'Autónomo'},
				{word: 'Ambicioso'},
				{word: 'Motivado'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?CAN I REMOVE THIS AS I HAVE NO PICS?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
