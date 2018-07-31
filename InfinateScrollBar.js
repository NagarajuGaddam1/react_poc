
	
import React from "react";
 
class InfinateScrollBar extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      cards: 10,
      loadingState: false,
      cardsData:[]
    };
  }
 
  componentDidMount() {
    this.refs.infScroll.addEventListener("scroll", () => {
        //this.state.loadingState will help to not load all the time when user hits the bottom of the scroll bar and it will work once it is done with first hit.
      if (this.refs.infScroll.scrollTop + this.refs.infScroll.clientHeight >=this.refs.infScroll.scrollHeight && !this.state.loadingState){
          console.log(this.state.loadingState);
        this.loadMoreCards();
      }
    });
  }
 
  displayCards() {
   // this.state.cardsData.length it will make sure that you dont have to load all again from 0 it will start from last index
    for (var i = this.state.cardsData.length; i < this.state.cards; i++) {
        console.log(i);
        this.state.cardsData.push(

      <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
);
    }
    return this.state.cardsData;
  }
 
  loadMoreCards() {
    this.setState({ loadingState: true });
	// This we can get it from API
    setTimeout(() => {
      this.setState({ cards: this.state.cards + 10, loadingState: false });
    }, 3000);
  }
 
  render() {
    return (
      <div ref="infScroll" style={{ height: "500px", overflow: "auto" }}>
        <ul>
          {this.displayCards()}
        </ul>
 
        {this.state.loadingState ? <p className="loading"> loading More cards..</p> : ""}
 
      </div>
    );
  }
}

export default InfinateScrollBar;



