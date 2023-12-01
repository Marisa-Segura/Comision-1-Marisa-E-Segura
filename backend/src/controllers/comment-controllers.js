import  { CommentModel } from ' ./comment-model.js';

export const ctrlNewComment = async (req, res) => {
  try {

    const comment = new CommentModel({
      title: req.body.title,
      comment: req.body.comment,
      blog_author: req.body.blog_author,
      children: req.body.children,
      commented_by: req.body.commented_by,
      parent: req.body.parent,
      created_at: req.body.created_at,
    });
    await comment.save();
    res.status(200).json(comment);
    
  } catch (err) {
    res.status(500).json(err);
  }


};

export const ctrlUpdateComment = async (req, res) => {
  try {
    const comment = await CommentModel.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        comment: req.body.comment,
        blog_author: req.body.blog_author,
        children: req.body.children,
        commented_by: req.body.commented_by,
        parent: req.body.parent,
        created_at: req.body.created_at,
      },
      { new: true }
    );
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
  
}


export const ctrlDeleteComment = (req, res) => {
  try {
    CommentModel.findByIdAndDelete(req.params.id)
    .then((comment) => {
        res.status(200).json(comment);
      })
    .catch((err) => {
        res.status(500).json(err);
      });
  } catch (err) {
    res.status(500).json(err);
  } 
}





