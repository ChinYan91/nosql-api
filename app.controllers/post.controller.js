const PostModel = require("../app.models/post.model");

class PostController {
    create(req, res) {
        PostModel.create(req.body, res);
    }

    getAll(req, res) {
        PostModel.getAll(req.query, res);
    }

    update(req, res) {
        let _id = req.body.postID,
            title = req.body.title,
            body = req.body.body;

        PostModel.update({ _id }, { title, body }, res);
    }

    delete(req, res) {
        PostModel.update(req.body, res);
    }
}

module.exports = PostController;