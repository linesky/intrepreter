const { exec }=require("child_process")
function srun(datta1){
	exec(datta1.toString(),(error,stdout,stderr)=>{
		console.log(stdout)
		console.log(stderr)
	});
	return 0
}
function scommand(datta2){
	s2=datta2.toString().split(";")
	for (n2=0;n2<s2.length;n2++){
		srun(s2[n2])
	}
	return s3.length
}
function sline(datta3){
	s3=datta3.toString().split("\n")
	for (n3=0;n3<s3.length;n3++){
		if(s3[n3]!="")scommand(s3[n3])
	}
	return s3.length
}
var fs=require("fs")
dattas=fs.readFileSync("run.shell")
sline(dattas)
