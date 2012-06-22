 function(doc) {
  if (doc._id.substr(0,8) === "entries:") {
    emit(doc._id.substr(8), {
    	"jtitle": doc.jtitle,
    	"jdate": doc.jdate,
    	"groups": doc.groups,
    	"rating": doc.rating,
    	"notes": doc.notes
    });
  }
};  