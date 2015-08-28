/**
 * Created by liyatang on 15/8/1.
 */


var Comment = React.createClass({
    render: function () {
        var html = marked(this.props.children.toString(), {sanitizer: true})
        return (
            <div>
                <h3>{this.props.author}</h3>
                <div dangerouslySetInnerHTML={{__html: html}}></div>
                <input type="checkbox" checked={this.props.checked}/>
                <hr/>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var list = this.props.data.map(function (value) {
            return (
                <Comment author={value.author} checked='checked'>{value.html}</Comment>
            );
        });
        return (
            <div>
                {list}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function (e) {
        console.log(this);
        this.props.onSubmit({
            author: this.refs.author.getDOMNode().value,
            html: this.refs.html.getDOMNode().value
        });
        this.refs.author.getDOMNode().value = '';
        this.refs.html.getDOMNode().value = '';

        e.preventDefault();
        return;
    },
    render: function () {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" ref='author'/>
                    <textarea cols="30" rows="10" ref='html'></textarea>
                    <button type='submit'>submit</button>
                </form>
            </div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function () {
        return {
            data: []
        };
    },
    componentDidMount: function(){
        this.setState({
            data: [{
                author: 'liyatang', html: 'hello'
            }, {
                author: 'liyatang', html: 'hello'
            }]
        });
    },
    handleSubmit: function (comment) {
        this.setState({
            data: this.state.data.concat(comment)
        });
    },
    render: function () {
        var obj = {a:1,b:2};
        return (
            <div>
                <h1 {...obj}>CommentBox</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }

});

React.render(<CommentBox  haha='aaaa'/>, document.body);