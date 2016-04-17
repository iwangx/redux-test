/**
 * Created by iwangx on 16/2/25.
 * webpack打包后的处理
 */
var rimraf = require('rimraf');
var fs = require( 'fs' ),
    stat = fs.stat;
var dev =process.env.MODE;

return false;

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;

            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    // 创建读取流
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
        rimraf(src, function(){
            console.info(src+"清理完成!");
        });
    });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function( src, dst, callback ){
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            callback( src, dst );
        }
        // 不存在
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};
// 复制fonts目录

exists( 'fonts', 'dist/fonts', copy );
dev == "test"  && rimraf("views", function(){
    fs.mkdir("views",function(){
        exists( 'dist/default', 'views/default', copy );
        exists( 'dist/error', 'views/error', copy );
        exists( 'dist/item', 'views/item', copy );
        exists( 'dist/order', 'views/order', copy );
    });
});

dev == "php" && rimraf("php/css",function(){
    rimraf("php/js",function(){

    });
});



