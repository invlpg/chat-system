/**
 * Methods which operate on groups
 */
module.exports = (app, path, state) => {
  app.post("/api/groups/create", (request, response) => {
    response.json({ success: state.createGroup(request.body["name"], request.body["creator"]) });
  });

  app.get("/api/groups/:groupID/channels", (request, response) => {
    response.json(state.getChannels(request.params.groupID));
  })

  app.post("/api/groups/:groupID/assistants", (request, response) => {
    response.json({ success: state.setAssistants(request.params.groupID, request.body["assistants"]) });
  })

  app.post("/api/groups/:groupID/channels/create", (request, response) => {
    response.json({ success: state.createChannel(request.params.groupID, request.body["name"]) });
  })
}
