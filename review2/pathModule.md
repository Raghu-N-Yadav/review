# Path
Path module is used for handling and transforming file paths. It can be accessed using:

**Syntex**
```
const path = require('path');
```

1. #### Node.js ```path.join([...paths])``` Method

    The ```path.join()``` method joins the specified path segments into one path.


    - ```...paths``` A sequence of path segments
    - Returns: ```<string>```
    
``` javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('', '', '', '')
//Returns : '.'

path.join('user','','','files')
//Returns :: /user/files (zero-length paths are ignored)

path.join(__dirname)
//Returns :: path from root directory to current directory

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'
```

2. #### Node.js ```path.resolve([...paths])``` Method

    The ```path.resolve()``` method resolves a sequence of paths or path segments into an absolute path.

    The given sequence of paths is processed from right to left, with each subsequent path prepended until an absolute path is constructed.

    - ```...paths``` A sequence of path segments
    - Returns: ```<string>```

```javascript
path.resolve('/file1', '/file2','/file3')
//Returns :: /file3

path.resolve('/file1', '/file2','file3')
//Returns :: /file2/file3

path.resolve('/file1', 'file2','file3')
//Returns :: /file1/file2/file3

path.resolve('file1', 'file2','file3')
//Returns :: 'path from root to current directory'/file1/file2/file3

path.resolve() & path.resolve('','')
//Returns :: 'path from root to current directory'

path.resolve('/file1', 'file2/file3')
//Returns :: /file1/file2/file3

path.resolve('/file1', '/file2/file3')
//Returns :: /file2/file3
```
A ```TypeError``` is thrown if any of the arguments is not a string.