module ApplicationHelper
  def milliseconds(time)
    seconds=(time/1000)
    Time.at(seconds).strftime("%M:%S")
  end

  def percent(decimal)
    (decimal*100).round
  end
end
