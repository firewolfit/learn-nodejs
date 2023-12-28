 // 从已有数据构建缓冲区
 const bufs = Buffer.from('hello,world','ascii');
 console.log(bufs.toString('hex')); //转换为hex编码
 console.log(bufs.toString('base64')); // base编码
 
 //构建空的缓冲区并写入数据
 var bufs2 = Buffer.alloc(2048)
 len = bufs2.write('Hello, This is a world !','ascii')
 console.log('byte length is : ',len)


 
