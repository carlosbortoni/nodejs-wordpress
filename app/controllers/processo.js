const wordpress = require( "wordpress" );

const client = wordpress.createClient({
  url: "http://my-site.com",
  username: "admin",
  password: "123456"
});


exports.Ping = (req, res) => {
  res.status(200).json({ "resposta": "Ping" });
};

exports.PostAll = (req, res) => {
  
  client.getPosts(function( error, posts ) {
    res.status(200).json(posts);
  });
}

exports.SendPost = (req, res) => {
  client.newPost(req.body, function( error, data ) {
    res.status(200).json(data);
  });  
}

exports.EditPost = (req, res) => {
  client.editPost(req.params.id, req.body, function( error, data ) {
    res.status(200).json(data);
  });
}

exports.getCPT = (req, res) => {
  client.getPosts({
    type: req.params.custom
  },
    function( error, postTypes ) {
    res.status(200).json(postTypes);
  })
}