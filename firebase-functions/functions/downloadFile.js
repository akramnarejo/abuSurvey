const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

exports.downloadFile = functions.https.onRequest(async (req, res) => {
  const fileName = req.query.fileName; // Pass the file name as a query parameter
  const file = storage.bucket("eims-3d73a.appspot.com").file(`userFiles/${fileName}`);

  const [metadata] = await file.getMetadata();

  // Set Content-Disposition header to force download
  res.setHeader("Content-Disposition", `attachment; filename="${metadata.name}"`);

  // Serve the file
  file.createReadStream().pipe(res);
});
