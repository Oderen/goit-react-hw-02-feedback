// import React from 'react';
// import css from './Feedback.module.css';

// export default class Feedback extends React.Component {
  
//   static defaultProprs = {
//     good: 0
//   }
  
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }



//   addGoodFeedback = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1
//     }))
//     return;
//   }

//   addNeutralFeedback = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1
//     }))
//     return;
//   }

//   addBadFeedback = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1
//     }))
//     return;
//   }

//   render() {
//     return (
//         <div className={css.container}>
//         <h1>Please leave a feedback</h1>

        // <button className={css.buttons} onClick={this.addGoodFeedback}>Good</button>
        // <button className={css.buttons} onClick={this.addNeutralFeedback}>Neutral</button>
        // <button className={css.buttons} onClick={this.addBadFeedback}>Bad</button>
      
      
//         {this.countTotalFeedback() > 0 ? <><p><b>Statistics</b></p>

//       <div className={css.innerContainer}>
//         <p><b>Good</b>: {this.state.good}</p> 
//         <p><b>Neutral</b>: {this.state.neutral}</p>
//         <p><b>Bad</b>: {this.state.bad}</p>
//         </div>

//         <div>
//           <p><b>Total</b>: {this.countTotalFeedback()}</p>
//           <p><b>Positive Feedback</b>: {this.countPositiveFeedbackPercentage()}%</p>
//         </div></> : <p>There is no feedback</p>}
//       </div>
//     );
//   }
// }

//         <h1>Please leave a feedback</h1>

//         <button className={css.buttons} onClick={this.addGoodFeedback}>
//           Good
//         </button>
//         <button className={css.buttons} onClick={this.addNeutralFeedback}>
//           Neutral
//         </button>
//         <button className={css.buttons} onClick={this.addBadFeedback}>
//           Bad
//         </button>
