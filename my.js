var app = new function(){
    this.el = document.getElementById('things');
    this.things = [];
    this.FetchAll = function(){
        var data = '';
        if(this.things.length > 0){
            for(i = 0; i < this.things.length; i++){
                data += '<tr>';
                data += '<td>' + (i + 1) + '. ' + this.things[i] + '</td>';
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-secondary">Edit</button></td>';
                data += '<td><button onclick="app.Delete('+i+')" class="btn btn-primary">Delete</button></td>';
                data += '</tr>'
            }
        }
        return this.el.innerHTML = data;
        /* ^adds my data points to my element*/
    };
    this.Add = function(){
        el = document.getElementById('add-thing');
        var thing = el.value;
        if(thing){
            this.things.push(thing.trim());
            /* ^removes white space after text*/
            el.value='';
            /* ^removes input from text-box */
            this.FetchAll();
        }
    };
    this.Edit = function(item){
        el = document.getElementById('edit-thing');
        el.value = this.things[item]
        document.getElementById('edit-box').style.display = 'block';
        self = this;
        document.getElementById('save-edit').onsubmit = function(){
            var thing = el.value;
            if(things){
                self.things.splice(item, 1, thing.trim());
                self.FetchAll();
                CloseInput();
                console.log('submitted');
                /*I added the console.log here to check that my loop was working,
                but I can't figure out why my new entered value isn't posting and instead
                the edited item is coming back blank. I tried tinkering with my .splice
                method, but that doesn't seem to be the problem. I originally had the word(thing)
                in my if loop without the s, and it wasn't entering the loop at all, with the s
                it enters the loop, and will cleal the orinal text on the item.*/
            }
            
        }
    };
    this.Delete = function(item){
        this.things.splice(item, 1);
        this.FetchAll();
    };
   
}

app.FetchAll();
function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
    /*this what the best way I could find to keep my editing/updating functionality hidden
    when it's not being used*/
}