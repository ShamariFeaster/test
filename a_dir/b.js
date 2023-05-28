function saveNewBreaksetTag(e){
    var Repo = Templar.getModel('Repo');
    var multiSelect = document.getElementById('tagsMultiselect');
    
    if(!_.isNullOrEmpty(Repo.newBreaksetTag) && multiSelect){
        Repo.breaksetTagsExist = true;
        //db call to persist tag and retrieve tag id (async needs api endpoint)
        var mockIdFromEndpoint = 1;
        Repo.breaksetTags.push({text : Repo.newBreaksetTag, value : mockIdFromEndpoint});
        var newOptions = constructMsOptions(Repo.breaksetTags);
        multiSelect.innerHTML = newOptions;
        //TODO: before rebuilding we need to make sure existing selections are re-selected
        multiSelect.loadOptions();
        
    }
    console.log('tag saved');
}

function constructMsOptions(arrOfObjs){
    var newOptions = '';
        
    arrOfObjs.forEach(function(item){
        newOptions += '<option value="'+item.value+'">'+item.text+'</option>';
    });
    
    return newOptions;
}