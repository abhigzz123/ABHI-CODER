#include<bits/stdc++.h>
using namespace std ;

int a[1000000] ;
int top = -1 ;

void push(int x)
{
    if(top >= 1e6)
    {
        cout <<"STACK OVERFLOW OCCURRED"<<endl;
        return ; 
    }
    else
    {
        a[++top] = x ; 
    }
}

int top_element()
{
    if(top+1 != 0)
    return a[top] ;
    else
    {
        cout<<"STACK IS EMPTY";
        return ;
    }

}

void pop()
{
    if(top!=0)
    top--;
    else
    {
        cout<<"STACK IS EMPTY";
        return ;
    }
}

int main()
{
    push(10) ;

    cout << top_element() <<endl ;
    
    push(20) ;
    push(30) ;
    pop() ;
    push(40) ;
    push(50) ;
    push(70) ;
    cout << top_element() <<endl ;
    pop() ;
    pop() ;
    cout << top_element() <<endl ;
    
    return 0 ;
}