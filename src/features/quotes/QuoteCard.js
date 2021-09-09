import React from 'react';
import { useDispatch } from 'react-redux';
import { downvoteQuote, upvoteQuote, removeQuote } from './quotesSlice';

function QuoteCard({ quote }) {
  const dispatch = useDispatch();

  function handleUp() {
    dispatch(upvoteQuote(quote.id));
  }
  function handleDown() {
    dispatch(downvoteQuote(quote.id));
  }
  function handleDelete() {
    dispatch(removeQuote(quote.id));
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              onClick={handleUp}
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              type="button"
              onClick={handleDown}
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
