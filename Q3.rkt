#lang racket
;3.1 count-syllables
;Signature:count-syllables(lst)
;Type:[List -> Number]
;Purpose:to compute if the currnt char is vowels we add 1 to count and skip vowels
;        else we call back to count-syllables with lst
;        if the lst is null we return to count-syllables with empty "list".
;        else we call back to count-syllables with lst
;        if the current char is "vowels" then we didnt count it again and just skip the vowels
;        else we return to count-syllables
(define count-syllables (lambda (lst)            
  (cond                                  
    
    ((null? lst) 0)                     
    
    ((member (car lst) '(a e i o u))     
     (+ 1 (skip-vowels (cdr lst))))
    
    (else
     (count-syllables (cdr lst)))         
    )
                          )
  )     


(define skip-vowels (lambda (lst)               
  (cond                                
    
    ((null? lst)                       
     (count-syllables '()))
    
    ((member (car lst) '(a e i o u))   
     (skip-vowels (cdr lst)))
    
    (else
     (count-syllables lst))              
    )
                      )
  )           




;Checking for 3.1 -> count-syllables
(define test_count-syllables (lambda ()
(printf "start tests for count-syllables:\n")
(if (eq? (count-syllables '(s o a r i n g)) 2)
(if (eq? (count-syllables '(b e e p)) 1) 
(if (eq? (count-syllables '(b e b e p a)) 3) #t #f)
#f)#f)))

(test_count-syllables)





;3.2 sorted?
;Signature: sorted?(lst, pred)
;Type: [List,pred -> Bool]
;Purpose:to compute if the list that given is on order by < or > (given)
;        just check if the current index in the list is < or > by recursive and returt true/false

(define sorted? (lambda (lst pred)
        (cond
          ((null? lst) #t)

          ((eq? (length lst) 1) #t)

          ((eq? pred >)
               (if (< (cadr lst) (car lst)) (sorted? (cdr lst) >) #f))

          ((eq? pred <)
               (if (> (cadr lst) (car lst)) (sorted? (cdr lst) <) #f))
              )
                  )
  )


;checking for 3.2 -> sorted?
(define test_sorted? (lambda ()
(printf "start tests for sorted?:\n")
(if (eq? (sorted? '(1 3 5) <) #t)
(if (eq? (sorted? '(2 1 5) <) #f) 
(if (eq? (sorted? '(5 3 1) >) #t)
(if (eq? (sorted? '(5 6 1) <) #f) #t #f) 
#f)#f)#f)))

(test_sorted?)
;(sorted? '(1 3 5) <)
;(sorted? '(2 1 5) <)
;(sorted? '(5 3 1) >)
;(sorted? '(5 6 1) >)




;3.3 merge
;Signature: merge(lst1 , lst2)
;Type: [List1 , List2 -> List(of merge)]
;Purpose:to compute merge of lst1,lst2 into one list by oreder of <

(define merge (lambda (lst1 lst2)
        (cond
          ((null? lst1) lst2)
          ((null? lst2) lst1)
          ((> (car lst1) (car lst2))
            (cons (car lst2) (merge lst1 (cdr lst2))))
          ((= (car lst1) (car lst2))
            (cons (car lst1) (merge (cdr lst1) (cdr lst2))))
          (else
            (cons (car lst1) (merge (cdr lst1) lst2)))
)))


;check for 3.3 -> merge
(define test_merge (lambda ()
(printf "start tests for merge:\n")
(if (equal? (merge '(1 3 4) '(2 5 6)) '(1 2 3 4 5 6))
(if (equal? (merge '(1 2 3) '(1 2 3)) '(1 2 3)) 
(if (equal? (merge '(1 2 3) '()) '(1 2 3)) #t #f)
#f)#f)))

(test_merge)
;(merge '(1 3 4) '(2 5 6))
;(merge '(1 2 3) '(1 2 3))
;(merge '(1 2 3) '())




;Signature: remove-adjacent-duplicates(lst)
;Type: [List -> List]
;Purpose:we get a list and we have to remove adjacent duplicats
;3.4 remove-adjacent-duplicates
(define remove-adjacent-duplicates(lambda (lst)
        (cond
          
          ((null? lst) '())
     
          ((null?(cdr lst)) (list(car lst)))

          ((equal? (car lst)(car(cdr lst)))
              (remove-adjacent-duplicates(cdr lst)))

          (else (cons(car lst)(remove-adjacent-duplicates(cdr lst))))
          
          )                           
                                    )
  )


;check for 3.4 ->remove-adjacent-duplicates
(define test_remove-adjacent-duplicates (lambda ()
(printf "start tests for test_remove-adjacent-duplicates:\n")
(if (equal? (remove-adjacent-duplicates '(y a b b a d a b b a d o o)) '(y a b a d a b a d o))
(if (equal? (remove-adjacent-duplicates '(yeah yeah yeah)) '(yeah)) 
(if (equal? (remove-adjacent-duplicates '(omer omer shani shani)) '(omer shani)) #t #f)
#f)#f)))

(test_remove-adjacent-duplicates)

;(remove-adjacent-duplicates '(y a b b a d a b b a d o o))
;(remove-adjacent-duplicates '(yeah yeah yeah))
;(remove-adjacent-duplicates '(omer omer shani shani))