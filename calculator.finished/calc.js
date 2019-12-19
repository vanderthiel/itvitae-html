/**
 * 
 * Op buttons klikken
 * meerdere getallen achter elkaar
 * meerdere operators, herkennen volgorde
 * 
 * Nodig:
 * - 3 getallen, variabelen
 * - operator, variabel
 * - 
 * 
 * klik op number: voer nummer 'n'
 * klik op operator:
 * - eindig number
 * - voer operator in
 * klik op '='
 * - uitrekenen
 * 
 * Backlog:
 * - negatieve getallen
 * - meerdere getallen
 */

$(document).ready(function(){

  // Calculator object
  let Calculator = function(first, operator, second){
    // init
    this.First = first;
    this.Second = second;
    this.Operator = operator;
    this.Result = null;

    // todo:
    // - wat nu te tonen in display?
    // - gebruiker helpen met status?
  }
  Calculator.prototype.TypeNumber = function(number){
    if(this.Result) {
      // New calculation, reset all
      this.Result = null;
      this.Operator = null;
      this.Second = null;
      this.First = number;

      localStorage.setItem("First", number);
      localStorage.removeItem("Operator");
      localStorage.removeItem("Second");

      $("#result").val(this.First);
    }
    else if(this.Operator == null) {
      this.First = this.First ? this.First + number : number;
      localStorage.setItem("First", this.First);
      // Is hetzelfde als:
      // if(this.First) {
      //   this.First = this.First + number;
      // }
      // else {
      //   this.First = number;
      // }

      $("#result").val(this.First);
    }
    else {
      this.Second = this.Second ? this.Second + number : number;
      localStorage.setItem("Second", this.Second);

      $("#result").val(this.Second);
    }
  }
  Calculator.prototype.TypeOperator = function(operator){
    if(this.Second == null) {
      this.Operator = operator;
      localStorage.setItem("Operator", this.Operator);
    }
  }
  Calculator.prototype.Calculate = function(){
    if(this.First && this.Second && this.Operator){
      this.Result = eval(this.First + this.Operator + this.Second);

      $("#result").val(this.Result);
    }
  }

  let calculator = new Calculator(
    localStorage.getItem("First") || null,
    localStorage.getItem("Operator") || null,
    localStorage.getItem("Second") || null
  );

  $(".num").click(function(){
    let char = $(this).text();
    calculator.TypeNumber(char);
  });

  $(".op").click(function(){
    let char = $(this).text();
    if(char === "="){
      calculator.Calculate(char);
    }
    else {
      calculator.TypeOperator(char);
    }
  });
});
