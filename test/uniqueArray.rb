require 'test/unit'

class ArrayTest < Test::Unit::TestCase

  # Fix this so that it passes the test
  def everyone_has_a_unique_name? people
    names = people.uniq {|person| person[:name]}
    people.eql? names
  end

  def test_unique

    my_friends = [{name: "Dale", age: 52},
              {name: "Sven", age: 26},
              {name: "Dale", age: 13},
              {name: "Austin", age: 37}]

    question = everyone_has_a_unique_name? my_friends
    assert_equal(question, false)
  end

end