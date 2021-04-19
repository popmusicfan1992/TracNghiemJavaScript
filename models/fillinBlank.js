class FillinBlank extends Question{
    constructor(type, id, content, answer) {
        super(type, id, content, answer);
    }
    render(index) {
        return `
            <div>
                <p class="lead font-italic" style="font-size: 30px">
                  Câu ${index}:  ${this.content}
                
                </p>
                <input type="text" id="${this.id}" class="form-control w-50">
               
            </div>
             `;
    }
    checkExact(){
        let input = document.getElementById(`${this.id}`).value;
        input = input.toLowerCase();
        
        for(let item of this.answer){
            if(input === item.content.toLowerCase()){
                return true;
            }
           return false;
        }
    }
}