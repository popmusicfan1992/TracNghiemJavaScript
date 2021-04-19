class MutipleChoice extends Question {
    constructor(type, id, content, answer) {
        super(type, id, content, answer);
    }
    render(index) {
        let answerHTML ="";

        for(let item of this.answer){
            answerHTML += `
            <div>
                <input value="${item.id}" name="${this.id}" type="radio" class="${this.id}">
                <label class="lead">${item.content}</label>
            </div>
            `;
        }
        return `
            <div>
                <p class="lead font-italic" style="font-size: 30px">
                  Câu ${index}:  ${this.content}
                
                </p>
                ${answerHTML};
            </div>
             `;
    }
    checkExact(){
      const inputlist =  document.getElementsByClassName(`${this.id}`);
        let answerId;
      for(let input of inputlist){
          if(input.checked){
                answerId = input.value;

          }
      }
      if(!answerId){
          return false;
      }

      for(let answer of this.answer){
          if(answerId == answer.id){
              return answer.exact;
          }
      }
      return false;



        
    }
}