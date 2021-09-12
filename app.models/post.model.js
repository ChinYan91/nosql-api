const mongoose = require("mongoose");
const Schema = mongoose.Schema;

postSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    userID: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
}, { timestamps: true });

const Post = mongoose.model("Posts", userSchema);

class PostModel {
    create(data, res) {
        let post = new Post(data).then(
            result => res.status(200).json({ error: 0, data: result, result: "post created" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, error: "post created fail" })
        );
    }

    getAll(data, res) {
        Post.find(data).then(
            result => res.status(200).json({ error: 0, data: result, result: "data retrieved" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, error: "data retrieves fail" })
        )
    }

    update(filter, data, res) {
        Post.updateOne(filter, data, res).then(
            result => res.status(200).json({ error: 0, data: result, result: "Post updated" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, result: "Post update failed" })
        );
    }

    delete(data, res) {
        Post.deleteOne(data, res).then(
            result => res.status(200).json({ error: 0, data: result, result: "Post deleted" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, result: "Post deletes failed" })
        );
    }
}

module.exports = PostModel;