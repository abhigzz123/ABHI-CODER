#include<bits/stdc++.h>
using namespace std ;
struct node
{
    int data; 
    node* next ;
} ;

void insert(node** head , int x)
{
    node* newnode = new node() ;
    newnode->data  = x ;
    newnode->next = *head ;
    *head = newnode ;
}


node* merge(node* head1 , node* head2)
{
    if(head1 == NULL)
        return head2 ;
    
    node dummy ;
    
    node* temp = &dummy ;


    if(head2 == NULL)
        return head2 ;

    else
    {
        while(1)
        {
            if(head1->data < head2->data)
            {   
                temp->next = head1 ; 
            }

            else
            {
                temp->next = head2 ;
            }   
            temp = temp->next ;

        }
        return dummy.next ;
    }    

}

void display(node* head)
{
    if(head == NULL)
    {
        cout <<"EMPTY LIST"<<endl; 
        return; 
    }

    while(head != NULL)
    {
        cout << head->data<<" ";
        head = head->next ;
    }

}

int main()
{
    node* head = NULL  ;

    insert(&head , 10 ) ;
    insert(&head , 20 ) ;
    insert(&head , 30 ) ;
    insert(&head , 40 ) ;

    display(head) ;

    return 0 ;
}