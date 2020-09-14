---
title: BIOM9450 - SQL
date: "2020-09-11T22:40:32.169Z"
---
1. Query crash course
2. Joins
3. Subqueries
4. Useful links
---
# Query crash course

The general structure for SQL queries is:

```SQL
  SELECT {_field_name_} # select what...
  FROM {_table__name_}  # from where...
  WHERE {condition}     # based on...
  SORT TYPE
```
It may also be worth nothing that SQL is not case sensitive (for the most part).

## Conditions

Conditions can be one of the following:

1. Comparisons

    _eg_. `<`, `>`, `<>`, `BETWEEN`

2. Missing data

    _eg_. `IS NULL`

3. Not

    _eg_. `IS NOT NULL`

Multiple conditions can be enforced by using boolean logic such as `AND`, `OR`, `NOT`.

Set logic can also be used to define a condtion such as `IN`.

## Sort type

The results obtained from the query can be ordered and group using the following syntax:

### Order by

Ordering set based on the field to order by, as well as whether to sort by in ascending or descending order. The order will be done alphabetically or numerically, based on the data type of the field.

```SQL
  SELECT {_field_name_}
  FROM {_table__name_}
  WHERE {condition}
  ORDER BY {_field_name_} {asc/desc}
```

### Group by

## Field

Field names can have the `DISTINCT` attribute placed before it to ensure that only one of each field is queried. 

Calculations can also  be done on the field, such as `COUNT` and `AVG`.

---

# Joins

Queries can be made across multiple tables using joins. Joint queries look like the following:

```SQL
  SELECT {_field_name_}
  FROM {_table1__name_}
  JOIN {_table2_name_} ON {_condition_}
  WHERE {condition}
  ORDER BY {_field_name_} {asc/desc}

```

There are four main types of joins:

* **Inner join**: obtain entries where the condition applies to both table1 and table2

* **Outer join**: obtain entries where the condition does not applies to both table1 and table2

* **Left join**: obtain entries where the condition applies to both table1 and table2 as well as all entries in table1

* **Right join**: obtain entries where the condition applies to both table1 and table2 as well as all entries in table2

---

# Subqueries and unions

---

# Useful links

The quickest way to get a hang of SQL is to pratice. The way I learnt SQL was basically by completing multiple [HackerRank exercises](https://www.hackerrank.com/domains/sql). I suggest compeleting a few until you get the hang of it. Note that the questions do get harder as you go along. Also, don't forget to change the language to `MS SQL Server`.