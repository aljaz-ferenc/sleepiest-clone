import './Reviews.scss'
import reviews from '../data/reviews.json'
import ReviewCard from './ReviewCard'

export default function Reviews() {

  return (
    <div className='reviews'>
        <h1 className='reviews__heading'>Latest Reviews From <span>Real People</span></h1>
        <p className='reviews__description'>Simply our latest reviews, good and bad, pulled directly from the app store.</p>
        <div className='reviews__cards'>
            <div>{reviews.slice(0, 3).map((rev, i) => <ReviewCard key={i} id={i} review={rev}/>)} </div>
            <div>{reviews.slice(3, 6).map((rev, i) => <ReviewCard key={i} id={i} review={rev}/>)} </div>
            <div>{reviews.slice(6, 9).map((rev, i) => <ReviewCard key={i} id={i} review={rev}/>)} </div>
        </div> 
    </div>
  )
}
