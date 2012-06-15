function(doc) {
  if (doc._id.substr(0,5) === "entry:") {
    emit(doc._id.substr(5), {
    	"jname": doc.jname,
    	"jdate": doc.jdate,
    	"groups": doc.groups,
    	"rating": doc.rating,
    	"notes": doc.notes
    });
  }
};