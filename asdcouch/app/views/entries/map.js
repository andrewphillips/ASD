function(doc) {
  if (doc._id.substr(0,5) === "entries:") {
    emit(doc._id.substr(5), {
    	"jtitle": doc.jtitle,
    	"jdate": doc.jdate,
    	"groups": doc.groups,
    	"rating": doc.rating,
    	"notes": doc.notes
    });
  }
};