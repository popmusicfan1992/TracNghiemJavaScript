

let questionList = [];


const fetchQuestion = async()=>{
    try {
      const res = await axios({
        url:"https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
        method:"GET",
       


      });
      return res.data
     
    } catch (error) {
      console.log(error);
    }
  
}

const renderQuestion = ()=>{
  let htmlContent = '';

  for(let i in questionList){
    htmlContent += questionList[i].render(+i + 1);
  }
  document.getElementById('questionsContainer').innerHTML = htmlContent;
 
}

const mapData = (data = [])=>{
  questionList = data.map((item)=>{

    //Kỹ thuật detructoring
    const {questionType,id,content,answers} = item;
    if(item.questionType == 1){
      return new MutipleChoice(questionType,id,content,answers);
    }
    else{
      return new FillinBlank(questionType,id,content,answers);
    }
    

  });
  console.log(questionList);
}

const submit = ()=>{
    let result = 0;

    for (let question of questionList){
      if(question.checkExact()){
        result++;
      }

    }
    alert('Kết quả: ' + result + '/' + questionList.length);
}

fetchQuestion().then((data)=>{
  mapData(data);
  renderQuestion();
});