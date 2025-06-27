import { Component } from "react";

class ClassBasedComponent extends Component{
    //state
    state={
     showText : false,
     changeColor:false,
     count:0,
     changeCountStyle:false
    };
    handleClick=()=>{
        console.log("button clicked");
        //This is not recommened because it will not render the text
        //this.state.showText=!this.state.showText
        const {showText,changeColor}=this.state
        this.setState({
            showText:!showText,
            changeColor:!changeColor
        });
    };

    //ComponentDidMount
    //ComponentDidUpdate
    //ComponentWillUnmount

    componentDidMount(){
        console.log('this is called first called first time on page load');

        this.setState({
            showText:!this.state.showText,
            changeColor:!this.state.changeColor,
        });
    }
    handleCount=()=>{
        this.setState({
            ...this.state,
            count:this.state.count+1
        })
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevState,this.state);

        if(prevState && prevState.count!==this.state.count && this.state.count==10){
            this.setState({
                ...this.state,
                changeCountStyle:true
            });
        }
    }

    //constructor(props){
      //  super(props)
        //this.state={
          //  showText:false,
        //};
    //}

    componentWillUnmount(){
        console.log('component is getting unmounted');
    }
    render(){
        //console.log(this.state);
        const{showText,changeColor,count,changeCountStyle}=this.state;

        console.log(changeCountStyle);
        return (
            <div>
                {showText? <h4 style={{color:changeColor?'pink':'black'}}>Class based Component</h4> : null}
                
                {/*<h3>Class based Component</h3>*/}
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase Count value</button>
                <h3 style={{color :changeCountStyle ? 'blue':'black',fontSize:changeCountStyle ?'30px':'12px',}}>Count is {count}</h3>
            </div>
        );

    }
}
export default ClassBasedComponent;