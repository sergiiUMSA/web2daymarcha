var x,dig,s;
x=parseInt(prompt("x: "));
s=0;


while(x!=0)//mientras= while //esa exclamacion es distinto
{
    dig=x%10;
    x=parseInt(x/10);//aca se usa el parse debido a q js es sensible a las divsiones y el rsultado saldra fraccionario
    s=s+dig; // esto es descomposiciond enumeros
}
alert(s);