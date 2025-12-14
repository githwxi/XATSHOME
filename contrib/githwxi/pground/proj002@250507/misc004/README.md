# Game-of-24

## Date

Sun Dec 14 12:56:52 PM EST 2025

## Description

Given four integers n1, n2, n3 and n4, one chooses two and uses
them to produce a rational number r1 by applying either addition,
subtraction, multiplication or division; one mixes r1 with the
remaining two numbers and chooses two of them to produce a rational
number r2 by applying either addition, subtraction, multiplication or
division; one then takes r2 and the last remaining number to produce a
rational number r3 by applying addition, subtraction, multiplication,
or division. If there exists a way to make r3 equal 24, then (n1, n2,
n3, n4) is said to be a good quad. For instance, (10,10,4,4) is a good
quad since we have: (10*10-4)/4 = 24. And (5,7,7,11) is also a good
quad since we have: (5-11/7)*7 = 24. Game-of-24 is a game that
determines whether four given integers form a good quad or not.

## Algorithm

It is a straightforward tree-based search.

## Implementation

An implementation is given that makes direct use of breadth-first search.
