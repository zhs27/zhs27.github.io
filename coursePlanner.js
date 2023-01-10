<!DOCTYPE html>
<html lang="en" dir="ltr">
 
<head>
    <meta charset="utf-8">
    <title>

    </title>
</head>
 
<body style="text-align: center;">
     
    <h1 style="color: red;">
        Course Planner
    </h1>
 
    <h3 id="head">Input Courses</h3>
    <form class="" action="index.html" method="post">
        <input type="text" name="course1section1[]" value="" /><br>
        <input type="text" name="course1section1[]" value="" /><br>
        <input type="text" name="course1section1[]" value="" /><br>
        <input type="text" name="course2section2[]" value="" /><br>
        <input type="text" name="course2section2[]" value="" /><br>
        <input type="text" name="course2section2[]" value="" /><br>
        <input type="text" name="course1section1[]" value="" /><br>
        <input type="text" name="course1section1[]" value="" /><br>
        <input type="text" name="course1section1[]" value="" /><br>
        <input type="text" name="course2section2[]" value="" /><br>
        <input type="text" name="course2section2[]" value="" /><br>
        <input type="text" name="course2section2[]" value="" /><br>
        <button type="button" name="button" onclick="planner()">
            Submit
        </button>
    </form>
    <br>
 
    <p id="par"></p>
 
    <script type="text/javascript">
        var k = "The respective values are :";
        function planner() {
            var course1section1[] = document.getElementsByName('course1section1[]');
            var course1section2[] = document.getElementsByName('course1section2[]');
            var course2section1[] = document.getElementsByName('course2section1[]');
            var course2section2[] = document.getElementsByName('course2section2[]');
            //not on the same day or course2 start time after course1 end time or reversely;
            if(course1section1[0] != course2section1[0] || course2section1[1] > course1section1[2] || course1section1[1] > course2section1[2]){
                k = "You can choose course1 section1 and course2 section1";
            }
            else if(course1section2[0] != course2section1[0] || course2section1[1] > course1section2[2] || course1section2[1] > course2section1[2]){
                k = "You can chose course1 section2 and course2 section1"
            }
            else if(course1section1[0] != course2section2[0] || course1section1[1] > course2section2[2] || course2section2[1] > course1section1[2]){
                k = "You can chose course1 section1 and course2 section2"
            }
            else if(course1section2[0] != course2section1[0] || course2section2[1] > course1section2[2] || course1section2[1] > course2section2[2]){
                k = "You can chose course1 section2 and course2 section2"
            }
 
            document.getElementById("par").innerHTML = k;
        }
    </script>
</body>
 
</html>