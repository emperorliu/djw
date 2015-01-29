module ApplicationHelper

  def minutes(time)
    Time.at(time).strftime("%M:%S")
  end

  def percent(decimal)
    (decimal*100).round
  end

  def mode(num)
    if num == 1
      "B"
    else
      "A"
    end
  end

  def harmonic_mixing(key)
    if key.include? 'B'
      case key.first
        when '0' then '8B'
        when '1' then '3B'
        when '2' then '10B'
        when '3' then '5B'
        when '4' then '12B'
        when '5' then '7B'
        when '6' then '2B'
        when '7' then '9B'
        when '8' then '4B'
        when '9' then '11B'
        when '10' then '6B'
        when '11' then '1B'
      end
    else key.include? 'A'
      case key.first
        when '0' then '5A'
        when '1' then '12A'
        when '2' then '7A'
        when '3' then '2A'
        when '4' then '9A'
        when '5' then '4A'
        when '6' then '11A'
        when '7' then '6A'
        when '8' then '1A'
        when '9' then '8A'
        when '10' then '3A'
        when '11' then '10A'
      end
    end
  end
end
