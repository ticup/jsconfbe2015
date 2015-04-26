var React = require('react');
var StarIcon = require('./lib/StarIcon');

var QuestionItem = React.createClass({
    getDefaultProps: function () {
        return {author: "Anonymous"};
    },
    render: function () {
        var author = this.props.author || "Anonymous"
        return (
            <div key={this.props.key} className="item">
                <StarIcon />
                <div className="content">
                    {author} : {this.props.question}
                </div>
            </div>
        );
    }
});

module.exports = QuestionItem;