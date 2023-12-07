const Hubs = require("./hubs-model.js");

async function checkHubId(req, res, next) {
  const hubId = req.params.id;
  try {
    const hub = await Hubs.findById(hubId);
    if (hub) {
      req.hub = hub;
      next();
    } else {
      next({ status: 404, message: `Hub ${hubId} not found` });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkHubId,
};
