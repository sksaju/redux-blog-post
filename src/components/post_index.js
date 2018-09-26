import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add new Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPost()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
