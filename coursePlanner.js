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
    <p id="courseNSection">Inputting:Course1 Section1</p>
    <form class="" action="index.html" method="post">
        <input type="text" name="day" value="" /><br>
        <input type="text" name="starttime" value="" /><br>
        <input type="text" name="endTime" value="" /><br>
        <button type="button" name="button" onclick="sectionAdd()">
            next section
        </button>
        <button type="button" name="button" onclick="courseAdd()">
            next course
        </button>
        <button type="button" name="button" onclick="planner(0)">
            submit
        </button>
    </form>
    <br>
 
    <p id="par"></p>
    var sections;
    var courses;
    var course = 1;
    var section = 1;

    <script type="text/javascript">
        function sectionAdd() {
            var day = document.getElementsByName('day');
            if (day.value !="") {
                day.value = "";
            }
            var startTime = document.getElementsByName('startTime');
            if (startTime.value !="") {
                startTime = "";
            }
            var endTime = document.getElementsByName('endTime');
            if (endTime.value !="") {
                endTime = "";
            }
            var thisSection = [day, startTime, endTime];
            sections.push(thisSection);
            section = section + 1;
            document.getElementById("courseNSection").innerHTML = "Inputting: Course" + course + " Section" + section;
        }
    </script>

    <script type="text/javascript">
        function courseAdd() {
            sectionAdd();
            courses.push(sections);
            course = course + 1;
            section = 1;
            document.getElementById("courseNSection").innerHTML = "Inputting: Course" + course + " Section" + section;
        }
    </script>   
 
    <script type="text/javascript">
        var k = "";
        function planner(index, ans) {
            if(index == courses.length){
                for(var i = 0; i < ans.length; ++i){
                    k += "Course" + (i + 1) + "Section" + ans[i] + " ";
                }
            }
            for(var i = 0; i < courses[index].length; ++i){
                var available = 1;
                for(var j = 0; j < ans.length; ++j){
                    if(courses[index][0] == ans[j][0] && 
                        (ans[j][1] < courses[index][2] && ans[j][2] > courses[index][1])||
                        (courses[index][1] < ans[j][2] && courses[index][2] > ans[j][1])){
                            available = 0;
                            break;
                        }
                }
                if(available){
                    ans.push(courses[index][i]);
                    planner(index + 1, ans);
                    ans.pop();
                }
            }
            if(k == ""){
                k = "No arrangement available";
            }
        }
        document.getElementById("par").innerHTML = k;
    </script>
</body>
 
</html>